import { useState } from "react"
import { addCategory } from "../../../services/categoryService"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function AddCategory() {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
const nav = useNavigate()
    const submit = (e) => {
        e.preventDefault()
        console.log("form submitted");
        let formData = new FormData()
        formData.append("name", name)
        formData.append("description", description)
        formData.append("image", image)
        addCategory(formData).then((res) => {
            if (res.data.success) {

                toast.success(res.data.message)
                 nav("/admin/categories/manage")

            }
            else {
                toast.error(res.data.message)
            }
        }).catch((err) => {
            console.log(err);
            toast.error(err)
        })


    }

    return (
        <>
            {/* Header Start */}
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">
                                Add Category
                            </h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <a className="text-white" href="#">
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a className="text-white" href="#">
                                            Categories
                                        </a>
                                    </li>

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Service Start */}
            <div className="container-xxl">
                <div className="container">

                    <div className="col-lg-8 offset-lg-2 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                        <form onSubmit={submit}>

                            <div className="row my-2">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="name"
                                            className="form-control"
                                            id="email"
                                            placeholder="Category Name " value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <label htmlFor="email">Category Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="subject"
                                            placeholder="Image" onChange={(e) => setImage(e.target.files[0])}
                                        />
                                        <label htmlFor="subject">Image</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row my-2">

                                <div className="col-md-12">
                                    <div className="form-floating">
                                        <textarea name="" className="form-control" id="" value={description}
                                             onChange={(e) => setDescription(e.target.value)}></textarea>
                                        <label htmlFor="subject">Description</label>
                                    </div>
                                </div>
                            </div>



                            <div className="row g-3">
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">
                                        Add Now
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>

            {/* Team End */}
        </>
    )
}

