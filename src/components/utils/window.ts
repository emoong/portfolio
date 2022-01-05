import { FileWindow, WindowSize } from "components/type/entity/window";

export const windowComponent = (files: FileWindow[], uid: string) => {
  return files.find(file => file.uid === uid);
}

export const windowCoordinates = (files: FileWindow[], uid: string) => {
  const thisComponent = windowComponent(files, uid);
  if (thisComponent) {
    return thisComponent.coordinates;
  }
  return [200, 200];
}

export const windowSize = (files: FileWindow[], uid: string) => {
  const thisComponent = windowComponent(files, uid);
  if (thisComponent) {
    switch (thisComponent.size) {
      case WindowSize.MAX: {
        return ["100vw", "100vh"];
      }
      case WindowSize.MIN: {
        return ["0px", "0px"];
      }
      case WindowSize.NORMAL: {
        return ["500px", "400px"];
      }
      default: {
        return ["500px", "400px"];
      }
    }
  }
  return ["500px", "400px"];
}