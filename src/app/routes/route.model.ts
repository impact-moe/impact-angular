export class MoeRoute {
  readonly label: string;
  readonly path: string;

  constructor(builder: MoeRoute.Builder) {
    this.label = builder.getLabel() || '';
    this.path = builder.getPath() || '/';
  }
}

export namespace MoeRoute {
  export class Builder {
    private label?: string;
    private path?: string;

    setPath(path: string) {
      this.path = path;
      return this;
    }

    setLabel(label: string) {
      this.label = label;
      return this;
    }

    build() {
      return new MoeRoute(this);
    }

    getPath() {
      return this.path;
    }

    getLabel() {
      return this.label;
    }
  }
}
