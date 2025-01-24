import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useParams } from 'react-router-dom';
import { fetchDetailCourses } from '../features/course/courseThunks';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CourseDetail = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const course = useAppSelector((state) => state.course.courseDetail);
    const [title, setTitle] = useState('');
    const [type, setType] = useState('file'); // Default type 'file'
    const [filePath, setFilePath] = useState<File | string>(''); // Untuk file atau link
    const [courseId, setCourseId] = useState<number>(Number(id) || 0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('type', type);
        formData.append('course_id', courseId.toString());
        
        if (type === 'file' && filePath instanceof File) {
            formData.append('file_path', filePath);
        } else if (type === 'link' && typeof filePath === 'string') {
            formData.append('file_path', filePath);
        }

        try {
            const token = localStorage.getItem('access_token');
            const response = await axios.post('http://localhost:8000/api/material', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            alert('Materi berhasil ditambahkan');
            window.location.reload();
        } catch (error) {
            console.error('Failed to add material:', error);
            alert('Gagal menambahkan materi');
        }
    };

    useEffect(() => {
        if (id && Number(id) !== courseId) {
            setCourseId(Number(id));
        }

        if (id) {
            dispatch(fetchDetailCourses(Number(id)));
        }
    }, [dispatch, id, courseId]);

    if (!course) {
        return <p>Loading...</p>;
    }

    return (
    <div>
        <h1>Detail Kursus</h1>
        <Link to={'/dashboard'}><button>Kembali</button></Link>
        <p><strong>Judul:</strong> {course.title}</p>
        <p><strong>Deskripsi:</strong> {course.description}</p>
        <p><strong>Harga:</strong> {course.price}</p>
        <p><strong>Level:</strong> {course.level}</p>
        <p><strong>Kategori:</strong> {course.categories.title}</p>
        <p><strong>Program:</strong> {course.programs.title}</p>
        <p><strong>Pengajar:</strong> {course.users.name}</p>
        
        <form onSubmit={handleSubmit}>
            <div>
                <label>Judul Materi:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Tipe Materi:</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                >
                    <option value="file">File</option>
                    <option value="link">Link</option>
                </select>
            </div>
            <div>
                <label>{type === 'file' ? 'Pilih File' : 'Masukkan Link'}</label>
                {type === 'file' ? (
                    <input
                        type="file"
                        onChange={(e) => setFilePath(e.target.files ? e.target.files[0] : '')}
                    />
                ) : (
                    <input
                        type="text"
                        value={filePath as string}
                        onChange={(e) => setFilePath(e.target.value)}
                    />
                )}
            </div>
            <button type="submit">Tambah Materi</button>
        </form>
    </div>
    );
};

export default CourseDetail;
