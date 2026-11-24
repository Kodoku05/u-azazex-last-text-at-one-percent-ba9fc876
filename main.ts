// 125 characters; the entry gate allows 1-200.
import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "I'm at 1% and dying. After your 47th snooze, I texted your boss 'still in bed' instead of 'on my way.' He replied: 'We know.'";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
