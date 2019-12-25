export interface SectionContainerType {
  title: string;
  onRetryPress?: () => void;
}

export interface LogType {
  caption: string;
  value: string;
  fetching?: boolean;
}
