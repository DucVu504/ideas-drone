const ContainerWrapper = ({ children }) => {
    return (
        <section className="bg-gray-50 p-3 sm:p-5 tablet:ml-20 laptop:ml-48 desktop:ml-56">
            <div className="mx-auto max-w-screen-xl px-4 mt-16">
                {children}
            </div>
        </section>
    );
};

export default ContainerWrapper;