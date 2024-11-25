export const handleMouseEnter = (itemName: string) => {
    const section = document.getElementById(itemName);
    section?.scrollIntoView({ behavior: "smooth" });
};