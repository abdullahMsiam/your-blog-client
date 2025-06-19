import React, { useState } from 'react'

const AddBlog = () => {

    const [formData, setFormData] = useState({
        title: '',
        subTitle: '',
        description: '',
        category: '',
        isPublished: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const generateWithAI = () => {
        // Dummy AI generation example
        setFormData({
            ...formData,
            description: 'This is an AI generated description for your blog.',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <div className='pb-10' >
            <h1 className='text-3xl font-bold text-center mt-6'>Add Blogs</h1>
            <div className='w-11/12 md:max-w-3xl mx-auto bg-blue-50 p-3 px-4 rounded-2xl'>
                <form onSubmit={handleSubmit} className="space-y-4  mx-auto">
                    <div>
                        <label className="block mb-1 font-semibold">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            placeholder="Enter blog title"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold">SubTitle</label>
                        <input
                            type="text"
                            name="subTitle"
                            value={formData.subTitle}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            placeholder="Enter blog subtitle"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold">Description</label>
                        <div className='border rounded p-2'>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full outline-0 px-2 h-64"
                                placeholder="Enter description"
                            ></textarea>
                            <div className="mt-2 text-end">
                                <button className='my-btn text-white px-3 rounded text-sm cursor-pointer hover:scale-105' onClick={generateWithAI}>
                                    Generate with AI
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                        >
                            <option value="">Select Category</option>
                            <option value="tech">Tech</option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="travel">Travel</option>
                            <option value="health">Health</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold">Publish Status</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="isPublished"
                                    value={true}
                                    checked={formData.isPublished === 'true' || formData.isPublished === true}
                                    onChange={() => setFormData({ ...formData, isPublished: true })}
                                />
                                Yes
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="isPublished"
                                    value={false}
                                    checked={formData.isPublished === 'false' || formData.isPublished === false}
                                    onChange={() => setFormData({ ...formData, isPublished: false })}
                                />
                                No
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className='btn btn-block btn-sm  btn-info' type="submit">Done</button>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default AddBlog