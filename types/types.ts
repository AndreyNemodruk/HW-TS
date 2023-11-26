export interface IPlayer {
  init(link: string): void;
  play(): void;
  pause(): void;
  stop(): void;
}
