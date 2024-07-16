export interface ITextAreaProps {
    id: string;
    name: string;
    placeholder?: string;
}

export default function SiteTextArea(
    { id, name, placeholder }: ITextAreaProps,
) {
    return (
        <textarea
            className="px-6 py-5 min-h-[250px] lg:py-2 rounded-md bg-gray4 bg-opacity-50 outline-none w-full lg:w-auto text-gray3"
            id={id}
            name={name}
            placeholder={placeholder}
        >
        </textarea>
    );
}
