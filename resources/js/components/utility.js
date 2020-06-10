export const setupTooltips = () => {
    const elements = document.querySelectorAll(".tooltipped");
    //eslint-disable-next-line
    M.Tooltip.init(elements, {
        enterDelay: 400,
    });
};
