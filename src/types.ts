export interface SectionContainerType {
  title: string;
  onRetryPress?: () => void | null;
}

export interface LogType {
  caption: string;
  value: string;
  fetching?: boolean;
}
