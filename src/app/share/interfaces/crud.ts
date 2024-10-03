export interface Crud<T> {
    getAll(): T[];
    get(id: string): T | null;
    add(element: T): T | null;
    remove(index: number): T | null;
    update(element: T): T | null;
}