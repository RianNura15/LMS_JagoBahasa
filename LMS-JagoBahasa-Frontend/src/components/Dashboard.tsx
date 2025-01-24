import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { logout } from '../features/auth/authThunks';
import { useNavigate } from 'react-router-dom';
import { fetchCourses, addCourse } from '../features/course/courseThunks';;
import { fetchCategories } from '../features/category/categoryThunks';
import { fetchPrograms } from '../features/program/programThunks';

const Dashboard = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const courses = useAppSelector((state) => state.course.courses);
    const idUser = useAppSelector((state) => state.course.idUser);
    const categories = useAppSelector((state) => state.category.categories);
    const programs = useAppSelector((state) => state.program.programs);
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [level, setLevel] = useState('');
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [program_id, setProgramId] = useState(0);
    const [category_id, setCategoryId] = useState(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price.toString());
        formData.append("level", level);
        formData.append("program_id", program_id.toString());
        formData.append("category_id", category_id.toString());
        formData.append("instructor_id", idUser!.toString());
        
        if (thumbnail) {
            formData.append("thumbnail", thumbnail);
        }

        try {
            await dispatch(addCourse(formData));
            window.location.reload();
        } catch (error) {
            console.error("Failed to add course:", error);
        }
    };

    useEffect(() => {
        dispatch(fetchCourses());
        dispatch(fetchPrograms());
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleLogout = async () => {
        try {
            await dispatch(logout());
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <div>
            <button onClick={handleLogout} className="flex mx-auto mt-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logout</button>

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Dashboard</h2>
                        <p className="mt-2 text-lg/8 text-gray-600">Daftar Kursus</p>
                        </div>
                        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {courses.map((course) => (
                                <article key={course.id} className="bg-slate-800 p-10 flex max-w-xl flex-col items-start justify-between border rounded-2xl">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <span className="text-white">{course.categories.title}
                                    </span>
                                    <a
                                    
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                    {course.programs.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-600">
                                    <a href={`/courses/${course.id}`}>
                                        <span className="absolute inset-0" />
                                        {course.title}
                                    </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-white">{course.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <div className="text-sm/6">
                                    <p className="font-semibold text-white">
                                        <a>
                                        <span className="absolute inset-0" />
                                        {course.users.name}
                                        </a>
                                    </p>
                                    <p className="text-white">{course.users.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white py-10 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-semibold tracking-tight text-pretty mb-5 text-gray-900 sm:text-5xl">Tambah Kursus Baru</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm/6 font-medium text-gray-900">Judul Kursus:</label>
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm/6 font-medium text-gray-900">Deskripsi:</label>
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm/6 font-medium text-gray-900">Harga:</label>
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(Number(e.target.value))}
                                        required
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm/6 font-medium text-gray-900">Level:</label>
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <select
                                        value={level}
                                        onChange={(e) => setLevel(e.target.value)}
                                        required
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    >
                                        <option value="">Pilih Level</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm/6 font-medium text-gray-900">Thumbnail:</label>
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input
                                        type="file"
                                        onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
                                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm/6 font-medium text-gray-900">Program ID:</label>
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <select
                                        value={program_id}
                                        onChange={(e) => setProgramId(Number(e.target.value))}
                                        required
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    >
                                        <option value="">Pilih Program</option>
                                        {programs.map((program) => (
                                            <option key={program.id} value={program.id}>
                                                {program.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm/6 font-medium text-gray-900">Kategori ID:</label>
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <select
                                        value={category_id}
                                        onChange={(e) => setCategoryId(Number(e.target.value))}
                                        required
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    >
                                        <option value="">Pilih Kategori</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="rounded-md bg-indigo-600 my-4 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Tambah Kursus</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
