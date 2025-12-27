# Blog Content Styling

Add this to your `client/src/index.css` for proper blog post content rendering:

```css
/* Blog Content Styles */
.blog-content {
  @apply text-text-secondary leading-relaxed;
}

.blog-content h2 {
  @apply text-3xl font-bold text-text-primary mt-12 mb-6;
}

.blog-content h3 {
  @apply text-2xl font-bold text-text-primary mt-8 mb-4;
}

.blog-content h4 {
  @apply text-xl font-semibold text-text-primary mt-6 mb-3;
}

.blog-content p {
  @apply mb-6 text-lg;
}

.blog-content ul,
.blog-content ol {
  @apply mb-6 ml-6 space-y-2;
}

.blog-content ul {
  @apply list-disc;
}

.blog-content ol {
  @apply list-decimal;
}

.blog-content li {
  @apply text-text-secondary;
}

.blog-content strong {
  @apply font-semibold text-text-primary;
}

.blog-content em {
  @apply italic;
}

.blog-content a {
  @apply text-accent-cyan hover:text-accent-purple underline transition-colors;
}

.blog-content code {
  @apply bg-bg-tertiary px-2 py-1 rounded text-accent-cyan font-mono text-sm;
}

.blog-content pre {
  @apply bg-bg-tertiary p-4 rounded-lg overflow-x-auto mb-6;
}

.blog-content pre code {
  @apply bg-transparent p-0;
}

.blog-content blockquote {
  @apply border-l-4 border-accent-cyan pl-6 py-2 mb-6 italic text-text-muted;
}

.blog-content img {
  @apply rounded-lg my-8 w-full;
}

.blog-content hr {
  @apply border-white/10 my-12;
}

/* Line clamp utility for truncating text */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

## Alternative: Use React Markdown

For better Markdown support, install `react-markdown`:

```bash
npm install react-markdown remark-gfm
```

Then in `BlogPost.jsx`, replace the dangerouslySetInnerHTML section with:

```jsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// In your component:
<ReactMarkdown remarkPlugins={[remarkGfm]} className="blog-content">
  {blog.content}
</ReactMarkdown>;
```

This provides safer and more flexible Markdown rendering with GitHub Flavored Markdown support.
