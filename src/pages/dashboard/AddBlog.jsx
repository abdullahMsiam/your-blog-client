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
        <div >
            <h1>Add Blogs</h1>
            <div>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            placeholder="Enter description"
                            rows={5}
                        ></textarea>
                        <div className="mt-2">
                            <Button type="button" onClick={generateWithAI}>
                                Generate with AI
                            </Button>
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
                                    onChange={(e) => setFormData({ ...formData, isPublished: true })}
                                />
                                Yes
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="isPublished"
                                    value={false}
                                    checked={formData.isPublished === 'false' || formData.isPublished === false}
                                    onChange={(e) => setFormData({ ...formData, isPublished: false })}
                                />
                                No
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button type="submit">Done</Button>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default AddBlog