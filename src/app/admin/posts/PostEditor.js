'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { movePostToTrash, savePost } from '@/app/actions/post';
import { Save, Upload, X } from 'lucide-react';
import styles from '../admin.module.css';

const BLOCK_TAGS = new Set([
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'ul',
  'ol',
  'li',
  'blockquote',
  'pre',
  'hr',
  'figure',
  'figcaption',
  'table',
  'thead',
  'tbody',
  'tr',
  'td',
  'th',
]);

const INLINE_TAGS = new Set([
  'strong',
  'b',
  'em',
  'i',
  'u',
  's',
  'sub',
  'sup',
  'code',
  'a',
  'br',
  'img',
]);

const ALLOWED_TAGS = new Set([...BLOCK_TAGS, ...INLINE_TAGS]);

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function plainTextToHtml(text) {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => {
      const lines = paragraph.split('\n').map((line) => escapeHtml(line.trim())).filter(Boolean);
      return `<p>${lines.join('<br>')}</p>`;
    })
    .join('');
}

function normalizeUrl(url, { allowDataImage = false } = {}) {
  if (!url) return '';
  const value = url.trim();
  if (!value) return '';
  if (/^(https?:|\/)/i.test(value)) return value;
  if (allowDataImage && /^data:image\//i.test(value)) return value;
  return '';
}

function sanitizeHtml(html) {
  if (!html) return '';

  const parser = new DOMParser();
  const document = parser.parseFromString(html, 'text/html');

  const sanitizeNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return document.createTextNode(node.textContent || '');
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }

    const tagName = node.tagName.toLowerCase();
    if (['script', 'style', 'meta', 'link', 'xml'].includes(tagName)) {
      return null;
    }

    if (!ALLOWED_TAGS.has(tagName)) {
      const fragment = document.createDocumentFragment();
      Array.from(node.childNodes).forEach((child) => {
        const sanitizedChild = sanitizeNode(child);
        if (sanitizedChild) fragment.appendChild(sanitizedChild);
      });
      return fragment;
    }

    const normalizedTag = tagName === 'b' ? 'strong' : tagName === 'i' ? 'em' : tagName;
    const element = document.createElement(normalizedTag);

    if (normalizedTag === 'a') {
      const href = normalizeUrl(node.getAttribute('href'));
      if (href) {
        element.setAttribute('href', href);
        element.setAttribute('target', '_blank');
        element.setAttribute('rel', 'noopener noreferrer');
      }
    }

    if (normalizedTag === 'img') {
      const src = normalizeUrl(node.getAttribute('src'), { allowDataImage: true });
      if (!src) return null;
      element.setAttribute('src', src);
      const alt = node.getAttribute('alt');
      if (alt) element.setAttribute('alt', alt);
      return element;
    }

    Array.from(node.childNodes).forEach((child) => {
      const sanitizedChild = sanitizeNode(child);
      if (sanitizedChild) element.appendChild(sanitizedChild);
    });

    return element;
  };

  const fragment = document.createDocumentFragment();
  Array.from(document.body.childNodes).forEach((node) => {
    const sanitizedNode = sanitizeNode(node);
    if (sanitizedNode) fragment.appendChild(sanitizedNode);
  });

  const container = document.createElement('div');
  container.appendChild(fragment);
  return container.innerHTML.trim();
}

function dataUrlToFile(dataUrl, fileName) {
  const parts = dataUrl.split(',');
  if (parts.length !== 2) return null;

  const mimeMatch = parts[0].match(/data:(.*?);base64/);
  const mimeType = mimeMatch?.[1] || 'image/png';
  const binary = window.atob(parts[1]);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return new File([bytes], fileName, { type: mimeType });
}

function insertHtmlAtCursor(html) {
  if (!html) return;
  document.execCommand('insertHTML', false, html);
}

export default function PostEditor({ post = null }) {
  const router = useRouter();
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [featuredImageUploading, setFeaturedImageUploading] = useState(false);
  const [contentImageUploading, setContentImageUploading] = useState(false);
  const [featuredImageError, setFeaturedImageError] = useState('');
  const [contentError, setContentError] = useState('');
  const [formData, setFormData] = useState({
    id: post?.id || null,
    title: post?.title || '',
    content: post?.content || '',
    slug: post?.slug || '',
    status: post?.status || 'publish',
    excerpt: post?.excerpt || '',
    categories: post?.categories || '',
    featuredImage: post?.featuredImage || '',
  });

  useEffect(() => {
    if (!editorRef.current) return;

    const currentPostContent = post?.content || '';
    const initialHtml = currentPostContent.includes('<')
      ? currentPostContent
      : plainTextToHtml(currentPostContent);

    if (editorRef.current.innerHTML !== initialHtml) {
      editorRef.current.innerHTML = initialHtml;
    }
  }, [post?.content, post?.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      if (name === 'title' && !post && !prev.slug) {
        newData.slug = value
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
      }
      return newData;
    });
  };

  const uploadImage = async (file) => {
    const payload = new FormData();
    payload.append('file', file);

    const response = await fetch('/api/admin/upload', {
      method: 'POST',
      body: payload,
    });

    const result = await response.json();
    if (!response.ok || !result.url) {
      throw new Error(result.error || 'Image upload failed');
    }

    return result.url;
  };

  const syncEditorContent = () => {
    const nextContent = editorRef.current?.innerHTML || '';
    setContentError('');
    setFormData((prev) => ({ ...prev, content: nextContent }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFeaturedImageError('');
    setFeaturedImageUploading(true);
    try {
      const imageUrl = await uploadImage(file);
      setFormData((prev) => ({ ...prev, featuredImage: imageUrl }));
    } catch (err) {
      console.error(err);
      setFeaturedImageError(err.message || 'Image upload failed. Please try again.');
    } finally {
      setFeaturedImageUploading(false);
    }
  };

  const handleEditorPaste = async (e) => {
    const clipboardData = e.clipboardData;
    if (!clipboardData) return;

    const pastedHtml = clipboardData.getData('text/html');
    const pastedText = clipboardData.getData('text/plain');
    const clipboardFiles = Array.from(clipboardData.items || [])
      .filter((item) => item.kind === 'file' && item.type.startsWith('image/'))
      .map((item) => item.getAsFile())
      .filter(Boolean);

    if (!pastedHtml && !clipboardFiles.length) {
      return;
    }

    e.preventDefault();
    setContentImageUploading(clipboardFiles.length > 0);
    setContentError('');

    try {
      let htmlToInsert = sanitizeHtml(pastedHtml || plainTextToHtml(pastedText || ''));

      if (htmlToInsert) {
        const parser = new DOMParser();
        const document = parser.parseFromString(htmlToInsert, 'text/html');
        const images = Array.from(document.querySelectorAll('img'));
        let fileIndex = 0;

        for (const image of images) {
          const currentSrc = image.getAttribute('src') || '';

          if (/^data:image\//i.test(currentSrc)) {
            const file = dataUrlToFile(currentSrc, `pasted-image-${Date.now()}-${fileIndex + 1}.png`);
            if (file) {
              const uploadedUrl = await uploadImage(file);
              image.setAttribute('src', uploadedUrl);
            }
            continue;
          }

          if (/^file:/i.test(currentSrc) || !normalizeUrl(currentSrc)) {
            const file = clipboardFiles[fileIndex];
            if (file) {
              const uploadedUrl = await uploadImage(file);
              image.setAttribute('src', uploadedUrl);
              fileIndex += 1;
            } else {
              image.remove();
            }
          }
        }

        for (; fileIndex < clipboardFiles.length; fileIndex += 1) {
          const uploadedUrl = await uploadImage(clipboardFiles[fileIndex]);
          const paragraph = document.createElement('p');
          const image = document.createElement('img');
          image.setAttribute('src', uploadedUrl);
          image.setAttribute('alt', 'Pasted image');
          paragraph.appendChild(image);
          document.body.appendChild(paragraph);
        }

        htmlToInsert = document.body.innerHTML;
      } else if (clipboardFiles.length) {
        const uploadedImages = await Promise.all(
          clipboardFiles.map((file, index) => uploadImage(
            file,
            `pasted-image-${Date.now()}-${index + 1}.png`,
          )),
        );

        htmlToInsert = uploadedImages
          .map((imageUrl) => `<p><img src="${imageUrl}" alt="Pasted image"></p>`)
          .join('');
      }

      insertHtmlAtCursor(htmlToInsert);
      syncEditorContent();
    } catch (error) {
      console.error('Paste handling failed:', error);
      setContentError(error.message || 'Failed to paste the copied content. Please try again.');
    } finally {
      setContentImageUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentContent = editorRef.current?.innerHTML || '';
    if (!currentContent.replace(/<[^>]+>/g, '').trim()) {
      setContentError('Post content is required.');
      return;
    }

    setLoading(true);
    try {
      await savePost({ ...formData, content: currentContent });
      router.push('/admin/posts');
    } catch (error) {
      console.error('Failed to save post:', error);
      alert('Failed to save post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!formData.id) return;
    const confirmed = window.confirm('Move this post to trash? You can restore it later from the Trash page.');
    if (!confirmed) return;
    setLoading(true);
    try {
      await movePostToTrash(formData.id);
      router.push('/admin/posts/trash');
    } catch (error) {
      console.error('Delete failed:', error);
      alert('Failed to move post to trash. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.pageSection}>
      <div className={`${styles.panelHeader} ${styles.editorTopBar}`}>
        <div>
          <h1 className={styles.pageTitle}>{post ? 'Edit Post' : 'Create New Post'}</h1>
          <p className={styles.pageSubtitle}>Use the form below to add or update your blog post.</p>
        </div>
        <div className={styles.editorActions}>
          <button type="button" onClick={() => router.back()} className={styles.buttonSecondary}>
            <X size={16} />
            Cancel
          </button>
          {post && (
            <button type="button" onClick={handleDelete} disabled={loading} className={styles.buttonDestructive}>
              Delete
            </button>
          )}
          <button type="submit" disabled={loading} className={styles.buttonPrimary}>
            <Save size={16} />
            {loading ? 'Saving...' : 'Save Post'}
          </button>
        </div>
      </div>

      <div className={styles.editorGrid}>
        <div className={styles.editorMain}>
          <div className={styles.formField}>
            <label className={styles.formLabel}>Post Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title here..."
              className={styles.formInput}
              required
            />
          </div>

          <div className={styles.formField}>
            <label className={styles.formLabel}>Excerpt</label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Write a short excerpt for the post..."
              className={`${styles.formTextarea} ${styles.formInput}`}
            />
          </div>

          <div className={styles.formField}>
            <label className={styles.formLabel}>Content</label>
            <div
              ref={editorRef}
              contentEditable
              role="textbox"
              aria-multiline="true"
              data-placeholder="Paste from Word or Docs, or start writing here..."
              onInput={syncEditorContent}
              onPaste={handleEditorPaste}
              className={`${styles.formInput} ${styles.contentEditor}`}
              suppressContentEditableWarning
            />
            <p className={styles.fieldHelpText}>
              Paste directly from Word or Google Docs to keep headings, paragraphs, and images close to the original layout.
            </p>
            {contentImageUploading && <p className={styles.statusDate}>Uploading pasted image...</p>}
            {contentError && <p className={styles.errorText}>{contentError}</p>}
          </div>
        </div>

        <div className={styles.editorSide}>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>Publish Settings</h2>
            </div>
            <div className={styles.panelCard}>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className={styles.formSelect}
                >
                  <option value="draft">Draft</option>
                  <option value="pending">Pending Review</option>
                  <option value="publish">Publish</option>
                  <option value="trash">Trash</option>
                </select>
                <p className={styles.fieldHelpText}>
                  Only posts with `Publish` status appear on the live blog and open without a 404 page.
                </p>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>URL Slug</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  placeholder="post-url-slug"
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>Categories</label>
                <input
                  type="text"
                  name="categories"
                  value={formData.categories}
                  onChange={handleChange}
                  placeholder="Comma separated categories"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>Featured Image</label>
                <label className={styles.uploadDropzone}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={styles.hiddenFileInput}
                  />
                  <span className={styles.uploadDropzoneIcon}>
                    <Upload size={18} />
                  </span>
                  <span className={styles.uploadDropzoneTitle}>Upload from your computer</span>
                  <span className={styles.uploadDropzoneText}>
                    Select JPG, PNG, WEBP, or SVG for the featured image.
                  </span>
                </label>
                {featuredImageUploading && <p className={styles.statusDate}>Uploading image...</p>}
                {featuredImageError && <p className={styles.errorText}>{featuredImageError}</p>}
                <input
                  type="text"
                  name="featuredImage"
                  value={formData.featuredImage}
                  onChange={handleChange}
                  placeholder="/uploads/your-image.webp or external URL"
                  className={styles.formInput}
                />
                {formData.featuredImage && (
                  <div className={styles.imagePreview}>
                    <img src={formData.featuredImage} alt="Featured" className={styles.imagePreviewImg} />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>Help & Tips</h2>
            </div>
            <div className={styles.panelCard}>
              <ul className={styles.tipList}>
                <li>Use standard HTML tags for formatting if needed.</li>
                <li>The slug is used for the public URL: /blog/your-slug.</li>
                <li>Drafts are not visible on the public site.</li>
                <li>Pending posts are stored in admin until you publish them.</li>
                <li>Delete moves the post to Trash first, where you can restore or remove it permanently.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
