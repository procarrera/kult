export default function Log(text: any) {
    console.clear()
    console.log('\x1b[32m%s\x1b[0m', `\n***********************************`)
    console.log('\x1b[32m%s\x1b[0m', `[INFO] ${text}`);
    console.log('\x1b[32m%s\x1b[0m', `***********************************`)
}