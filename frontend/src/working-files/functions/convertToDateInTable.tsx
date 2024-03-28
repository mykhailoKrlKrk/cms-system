export default function convertToDateInTable(isoDate: string){
    const date = new Date(isoDate);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}