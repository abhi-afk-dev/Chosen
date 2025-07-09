import { useEffect, useRef } from "react";
import { EditorView, basicSetup } from "codemirror";

function QuestEditor() {
  const editor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editor.current) return;

    const view = new EditorView({
      doc: "",
      extensions: [basicSetup],
      parent: editor.current
    });

    return () => {
      view.destroy();
    };
  }, []);

  return (
    <div className="bg-black">
      <div className="h-full w-full" ref={editor} />
    </div>
  );
}

export default QuestEditor;
