// stylish heading for home page

const HeadingGrp = ({ title, subTitle }: { title: string, subTitle: string }) => {
    return (
        <div className="heading-grp">
            <h1>{title}</h1>
            <h3>{subTitle}</h3>
        </div>
    )
}

export default HeadingGrp;
