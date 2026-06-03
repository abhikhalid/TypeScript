//Intersection types allow you to combine multiple types into one.
//This is useful when you want to create a new type that has all the properties of the combined types.
// & is the operator used to create an intersection type.

type FileData = {
 path: string;
    content: string;
}

type DatabaseData = {
    connectionUrl: string;
    credentials: string;
}

type Status = {
    isOpen: boolean;
    errorMessage?: string;
}

type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;

// or we could use interface to achieve the same result
interface FileData2{
    path: string;
    content: string;
}

interface DatabaseData2{
    connectionUrl: string;
    credentials: string;
}

interface Status2{
    isOpen: boolean;
    errorMessage?: string;
}

interface AccessedFileData2 extends FileData2, Status2 {}
interface AccessedDatabaseData2 extends DatabaseData2, Status2 {}