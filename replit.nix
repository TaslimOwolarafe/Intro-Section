{ pkgs }: {
  deps = [
    pkgs.clear
pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}