export default function dateFormater(date: string) {
    return new Date(date).toLocaleDateString("pt-BR");
}