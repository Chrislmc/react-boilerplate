export interface IDrupalValue<T> {
    value: T;
    processed?: T;
}
export interface IDrupalFormatValue extends IDrupalValue {
    format: string;
}

export interface IDrupalRelationship {
    target_id: string;
    target_type: string;
    target_uuid: string;
}

export interface IDrupalFile {
    target_id: number;
    alt: string;
    title: string;
    width: number;
    height: number;
    target_type: "file";
    target_uuid: string;
    url: string;
}
