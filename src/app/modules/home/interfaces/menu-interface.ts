/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
export interface Menu {
  name: string;
  children?: Menu[];
  icon?: string;
  path?: string;
}
