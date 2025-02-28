import type { recipeBlocks } from '@/models/blocks/recipes';

const difficultyLabels = {
  S: 'Easy',
  M: 'Medium',
  L: 'Hard',
} as const;

export default function StepsListBlock({
  block: { value },
}: {
  block: recipeBlocks.StepsList;
}) {
  return (
    <div className="recipe-steps">
      <h3>Instructions</h3>
      <ol>
        {value.map((step, i) => (
          <li key={i}>
            <div dangerouslySetInnerHTML={{ __html: step.text }} />
            <span
              className={`difficulty difficulty-${step.difficulty.toLowerCase()}`}
            >
              {difficultyLabels[step.difficulty]}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
