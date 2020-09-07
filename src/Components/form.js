import React,{Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bname: '',
            pages: '',
            aname: '',
            status: '',
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value,
        });
    }

    handleSubmit() {
        let form = this.state;
        this.setState({
            bname: '',
            pages: '',
            aname: '',
            status: '',
        })
        this.props.onClick(form);
    }

    componentDidMount() {
        this.setState({
            bname:this.props.bookName,
            pages:this.props.pages,
            aname: this.props.authorName,
            status: this.props.status,
        })
    }

    render() {
        const form = this.state;
        return(
            <div className="col-span-6 lg:col-span-2 flex lg:justify-end">
                <form className="flex flex-col w-3/4" >
                    <h2 className="text-2xl text-center py-4 underline">Add New Book</h2>
                    <label htmlFor="bname" className="text-xl">Book Name</label><br/>
                    <input id="bname" name="bname" type="text" value={form.bname} onChange={(e)=>this.handleChange(e)} className="border-b-2 border-gray-700" /><br/>

                    <label htmlFor="pages" className="text-xl">Number of pages</label><br/>
                    <input id="pages" name="pages" type="number" value={form.pages} onChange={(e)=>this.handleChange(e)} className="border-b-2 border-gray-700"/><br/>

                    <label htmlFor="aname" className="text-xl">Author name</label><br/>
                    <input id="aname" name="aname" type="text" value={form.aname} onChange={(e)=>this.handleChange(e)} className="border-b-2 border-gray-700"/><br/>

                    <label htmlFor="status" className="text-xl">Reading Status</label>
                    <div id="status">
                        <input id="status1" value="read" name="status" type="radio" onChange={(e)=>this.handleChange(e)} /><label htmlFor="status1" className="text-xl px-2">Read</label>
                        <input id="status2" value="not_read" name="status" type="radio" onChange={(e)=>this.handleChange(e)} /><label htmlFor="status2" className="text-xl px-2">Not Read</label>
                    </div><br/>
                    <button className="border rounded border-gray-600 p-2 text-lg" type="button" onClick={()=>this.handleSubmit()}>
                        {this.props.buttonName}
                    </button>
                </form>
            </div>
        )
    }
}

export default Form;