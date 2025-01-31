type ImageProps = {
    className?: string
}

export default function Logo({ className }: ImageProps) {
    return (
        <img className={"h-10 " + className} src="../images/header_logo.png" />
    );
}
