/**
 * Terminal UI Component - Code snippet typing animation
 */

export function initTerminalTyping() {
  const terminalElement = document.getElementById('terminal-code');
  if (!terminalElement) return;

  const codeSnippets = [
    `<span class="code-comment">// Systems Architecture & Creative Tech</span>\n<span class="code-keyword">const</span> engineer = {\n  name: <span class="code-string">"Kai Vance"</span>,\n  role: <span class="code-string">"Senior Staff Engineer"</span>,\n  specialties: [<span class="code-string">"WebGL"</span>, <span class="code-string">"TypeScript"</span>, <span class="code-string">"Systems"</span>],\n  performance: <span class="code-string">"99.9% Web Vitals"</span>\n};\n\n<span class="code-keyword">await</span> engineer.<span class="code-fn">buildAwesomeProduct</span>();`,
  ];

  terminalElement.innerHTML = codeSnippets[0] + '<span class="code-cursor"></span>';
}
