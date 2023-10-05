import * as Styled from "./style";

interface TaskProps {
  id: string;
  title: string;
  state: string;
}
interface Props {
  task: TaskProps;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}
export function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: Props) {
  return (
    <Styled.Container>
      <label htmlFor="checked" aria-label={`archiveTask-${id}`}>
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
        />
        <span onClick={() => onArchiveTask(id)} />
      </label>
      <label htmlFor="title" aria-label={title}>
        <input type="text" value={title} />
      </label>
      {state !== "TASK_ARCHIVED" && (
        <button
          onClick={() => onPinTask("10")}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span>버튼</span>
        </button>
      )}
    </Styled.Container>
  );
}
