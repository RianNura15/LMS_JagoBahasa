import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { logout } from '../features/auth/authThunks';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>

            <button>Buat Kursus Baru</button>
            <h2>Data Kursus</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Tutor</th>
                        <th>Nama Kursus</th>
                        <th>Deskripsi</th>
                        <th>Harga</th>
                        <th>Level</th>
                        <th>Kategori</th>
                        <th>Program</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={course.id}>
                        <td>{index + 1}</td>
                        <td>{course.users.name}</td>
                        <td>{course.title}</td>
                        <td>{course.description}</td>
                        <td>{course.price}</td>
                        <td>{course.level}</td>
                        <td>{course.categories.title}</td>
                        <td>{course.programs.title}</td>
                        <td>
                            <Link to={`/courses/${course.id}`}>
                                <button>Detail</button>
                            </Link>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1>Tambah Kursus Baru</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Judul Kursus:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Deskripsi:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Harga:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        required
                    />
                </div>
                <div>
                    <label>Level:</label>
                    <select
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        required
                    >
                        <option value="">Pilih Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
                <div>
                    <label>Thumbnail:</label>
                    <input
                        type="file"
                        onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
                    />
                </div>
                <div>
                    <label>Program ID:</label>
                    <select
                        value={program_id}
                        onChange={(e) => setProgramId(Number(e.target.value))}
                        required
                    >
                        <option value="">Pilih Program</option>
                        {programs.map((program) => (
                            <option key={program.id} value={program.id}>
                                {program.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Kategori ID:</label>
                    <select
                        value={category_id}
                        onChange={(e) => setCategoryId(Number(e.target.value))}
                        required
                    >
                        <option value="">Pilih Kategori</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.title}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Tambah Kursus</button>
            </form>
        </div>
    );
};

export default Dashboard;
