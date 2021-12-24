export const convertDockIconSize = (name: string) => {
  switch (name) {
    case "Finder": {
      return [40, 40];
    }
    case "Iterm": {
      return [50, 50];
    }
    case "Notes": {
      return [50, 50];
    }
    case "Postman": {
      return [50, 50];
    }
    case "Vscode": {
      return [40, 40];
    }
    case "Trash": {
      return [40, 50];
    }
    default: {
      return [50, 50];
    }
  }
}