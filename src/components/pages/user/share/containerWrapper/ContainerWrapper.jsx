const ContainerWrapper = ({ children }) => {
    return (
        <section className="bg-gray-50 p-3 sm:p-5 lg:ml-36">
            <div className="mx-auto max-w-screen-xl px-4 lg:mt-16">
                {children}
            </div>
        </section>
    );
};

export default ContainerWrapper;