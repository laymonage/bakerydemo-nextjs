import type { blocks } from '@/models/blocks/base';

export default function BlockQuote({
  block: { value },
}: { block: blocks.BlockQuote }) {
  return (
    <blockquote>
      <p className="text">{value.text}</p>
      <p className="attribute-name">{value.attribute_name}</p>
    </blockquote>
  );
}
