export interface ParseErrorConfig {
  source: unknown;
  message?: string;
}

export class ParseError extends Error {
  public source: unknown;

  constructor(config: ParseErrorConfig) {
    super(config.message);

    this.source = config.source;
  }
}


export function changeSource(source: unknown): (error: ParseError) => ParseError {
  return error => {
    if (error instanceof ParseError) {
      error.source = source;
    }

    return error;
  }
}
