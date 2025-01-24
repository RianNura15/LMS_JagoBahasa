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
    <div className='px-10 py-10'>
        <div className="px-4 sm:px-0">
            <h3 className="text-base/7 font-semibold text-gray-900">Applicant Information</h3>
            <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details and application.</p>
            <Link to={'/dashboard'}><button className="flex mt-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Kembali</button></Link>
        </div>
        <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">Judul</dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{course.title}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">Kategori</dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{course.categories.title}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">Program</dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{course.programs.title}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">Level</dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{course.level}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">Harga</dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Rp. {course.price}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">Deskripsi</dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {course.description}
                </dd>
            </div>
            </dl>
        </div>
        
        <h1 className="text-4xl font-semibold tracking-tight text-pretty my-10 text-gray-900 sm:text-5xl">Tambah Kursus Baru</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm/6 font-medium text-gray-900">Judul Materi:</label>
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm/6 font-medium text-gray-900">Tipe Materi:</label>
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                    >
                        <option value="file">File</option>
                        <option value="link">Link</option>
                    </select>
                </div>
            </div>
            <div>
                <label className="block text-sm/6 font-medium text-gray-900">{type === 'file' ? 'Pilih File' : 'Masukkan Link'}</label>
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    {type === 'file' ? (
                        <input
                            type="file"
                            onChange={(e) => setFilePath(e.target.files ? e.target.files[0] : '')}
                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                        />
                    ) : (
                        <input
                            type="text"
                            value={filePath as string}
                            onChange={(e) => setFilePath(e.target.value)}
                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                        />
                    )}
                </div>
            </div>
            <button type="submit" className="rounded-md bg-indigo-600 my-4 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Tambah Materi</button>
        </form>
    </div>
    );
};

export default CourseDetail;
