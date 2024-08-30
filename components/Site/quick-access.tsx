import QuickAccessIcon from "site/components/Site/quick-access-icon.tsx";

export default function QuickAccess() {
    return (
        <div className="flex justify-between items-center px-16 py-14 rounded-[20px] bg-gradient-to-r from-pink1 to-orange4">
            <span className="text-white font-sora font-medium text-xl">
                Acesso rápido:
            </span>

            <QuickAccessIcon
                text={"Boletos"}
                icon={"CalendarIcon"}
                link={"https://6167prd-plano.cloudmv.com.br/mvsaudeweb/#/login/empresa"}
            />
            <QuickAccessIcon
                text={"Rede Credenciada"}
                icon={"WhitePlusSquare"}
                link={"https://6167prd-plano.cloudmv.com.br/mvsaudeweb/#/guia-medico"}
            />
            <QuickAccessIcon
                text={"Telemedicina"}
                icon={"MobilePhoneIcon"}
                link={"https://mksaude.clinicatempo.com.br/telemedicina-pa/#/login"}
            />
            <QuickAccessIcon
                text={"Autorizações"}
                icon={"ClipBoardIcon"}
                link={"https://6167prd-plano.cloudmv.com.br/mvautorizadorguias/"}
            />
            <QuickAccessIcon
                text={"Guias e Documentos"}
                icon={"FileIcon"}
                link={"/Site/Guias e Documentos - Aurora Saúde.zip"}
            />
        </div>
    );
}
