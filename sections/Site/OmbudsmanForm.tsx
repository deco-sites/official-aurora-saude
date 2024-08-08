import OmbudsmanIsland from "site/islands/Site/ombudsman-form.tsx";

export interface Props {
    recipientsEmail: string;
    subject: string;
}

export default function OmbudsmanForm({ recipientsEmail, subject }: Props) {
    return <OmbudsmanIsland recipientsEmail={recipientsEmail} subject={subject} />;
}
