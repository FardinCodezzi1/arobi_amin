import fs from "node:fs";
import path from "node:path";

// 1. Ensure oxc-parser has a graceful fallback when native bindings are blocked by
// Windows Application Control / Device Guard / Smart App Control.
const bindingsPath = path.resolve("node_modules/oxc-parser/src-js/bindings.js");
if (fs.existsSync(bindingsPath)) {
  let content = fs.readFileSync(bindingsPath, "utf-8");
  if (
    content.includes("throw new Error(`Failed to load native binding`)") ||
    content.includes("npm has a bug related to optional dependencies")
  ) {
    const target =
      /if \(!nativeBinding\) \{[\s\S]*?throw new Error\(`Failed to load native binding`\)\s*\}/;
    const replacement = `if (!nativeBinding) {
  nativeBinding = {
    Severity: {},
    ParseResult: {},
    ExportExportNameKind: {},
    ExportImportNameKind: {},
    ExportLocalNameKind: {},
    ImportNameKind: {},
    parse: async () => ({ program: { type: 'Program', body: [] }, errors: ['Native binding not available'] }),
    parseSync: () => ({ program: { type: 'Program', body: [] }, errors: ['Native binding not available'] }),
    rawTransferSupported: () => false,
    getBufferOffset: () => 0,
    parseRaw: async () => '',
    parseRawSync: () => '',
  };
}`;
    if (target.test(content)) {
      content = content.replace(target, replacement);
      fs.writeFileSync(bindingsPath, content, "utf-8");
    }
  }
}

// 2. Clean up locally compiled .exe shims in node_modules/.bin on Windows.
// Bun generates unsigned .exe files for bin scripts which Windows Device Guard blocks.
// Removing .exe files allows the shell/npm to execute the safe .cmd/script files instead.
if (process.platform === "win32") {
  const binDir = path.resolve("node_modules/.bin");
  if (fs.existsSync(binDir)) {
    for (const file of fs.readdirSync(binDir)) {
      if (file.endsWith(".exe")) {
        try {
          fs.unlinkSync(path.join(binDir, file));
        } catch {}
      }
    }
  }
}
