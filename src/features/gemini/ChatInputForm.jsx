import { Button } from "../../shared/ui/Button";
import { InputBox } from "../../shared/ui/InputBox";

function ChatInputForm({ prompt, setPrompt, loading, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
      <div className="flex-grow">
        <InputBox
          label=""
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="무엇이든 물어보세요!"
          color="indigo"
          size="md"
          disabled={loading}
          className="!h-[42px]"
        />
      </div>
      <Button
        type="submit"
        color="indigo"
        size="md"
        className="!h-[42px]"
        disabled={loading}
      >
        {loading ? "답변 중…" : "질문하기"}
      </Button>
    </form>
  );
}

export default ChatInputForm;
