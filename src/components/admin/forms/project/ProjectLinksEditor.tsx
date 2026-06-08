import { useState } from "react";
import { ADMIN_FORM_INPUT_CLASS, ADMIN_SECONDARY_BUTTON_CLASS } from "../../../../constants/adminForm.constants";
import type { IProjectLink } from "../../../../types";

interface Props {
  links: IProjectLink[];
  onLinkAdded: (link: IProjectLink) => void;
  onLinkRemovedAtIndex: (linkIndex: number) => void;
}

const EMPTY_LINK_DRAFT: IProjectLink = { type: "", url: "" };

export const ProjectLinksEditor = ({ links, onLinkAdded, onLinkRemovedAtIndex }: Props) => {
  const [newLinkDraft, setNewLinkDraft] = useState<IProjectLink>(EMPTY_LINK_DRAFT);

  const handleAddLink = () => {
    if (!newLinkDraft.type.trim() || !newLinkDraft.url.trim()) return;
    onLinkAdded(newLinkDraft);
    setNewLinkDraft(EMPTY_LINK_DRAFT);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-neutral-400">Liens</span>

      {links.map((link, linkIndex) => (
        <div key={linkIndex} className="flex items-center gap-2 rounded-lg bg-neutral-800/50 px-3 py-2">
          <span className="text-xs text-neutral-500 w-24 shrink-0">{link.type}</span>
          <span className="flex-1 truncate text-xs text-neutral-300">{link.url}</span>
          <button
            type="button"
            onClick={() => onLinkRemovedAtIndex(linkIndex)}
            className="text-neutral-500 hover:text-red-400 transition-colors"
          >
            ×
          </button>
        </div>
      ))}

      <div className="flex gap-2">
        <input
          className={`${ADMIN_FORM_INPUT_CLASS} flex-1`}
          placeholder="Type (ex: github)"
          value={newLinkDraft.type}
          onChange={(e) => setNewLinkDraft((current) => ({ ...current, type: e.target.value }))}
        />
        <input
          className={`${ADMIN_FORM_INPUT_CLASS} flex-[2]`}
          placeholder="URL"
          value={newLinkDraft.url}
          onChange={(e) => setNewLinkDraft((current) => ({ ...current, url: e.target.value }))}
        />
        <button type="button" onClick={handleAddLink} className={ADMIN_SECONDARY_BUTTON_CLASS}>
          +
        </button>
      </div>
    </div>
  );
};
