import { useEffect } from "preact/hooks";

export interface Props {
    tag: string;
}

export default function GoogleTagManager({ tag }: Props) {
    useEffect(() => {
        // Adiciona o script do Google Tag Manager de forma assíncrona
        const script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=${tag}`;
        script.async = true;
        document.head.appendChild(script);

        // Injeta o código para inicializar o dataLayer e gtag
        const inlineScript = document.createElement("script");
        inlineScript.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${tag}');
        `;
        document.head.appendChild(inlineScript);
    }, [tag]);

    return null;
}
