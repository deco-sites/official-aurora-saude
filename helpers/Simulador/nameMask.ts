export const nameMask = (name: string): string => {
    name = name.replace(/[^a-zA-Zà-úÀ-Ú\s]/g, "");
    name = name.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });

    return name;
};
