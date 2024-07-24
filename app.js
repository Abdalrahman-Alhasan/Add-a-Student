// بداية بتعريف قائمة للطلاب
let students = [];

// دالة لإضافة طالب جديد
function addStudent(students, id, name) {
    try {
        // التحقق مما إذا كان معرف الطالب موجود بالفعل
        const existingStudent = students.find(student => student.id === id);
        if (existingStudent) {
            throw new Error(`الطالب بمعرف ${id} موجود بالفعل.`);
        }

        // إضافة الطالب إلى القائمة
        students.push({
            id: id,
            name: name,
            status: 'مسجل'
        });

        console.log(`تمت إضافة ${name} إلى قائمة الطلاب.`);
    } catch (error) {
        console.error(error.message);
    }
}

// دالة لحذف طالب من القائمة
function removeStudent(students, id) {
    try {
        // البحث عن الطالب بالمعرف
        const index = students.findIndex(student => student.id === id);

        // التحقق مما إذا كان الطالب موجود
        if (index === -1) {
            throw new Error(`الطالب بمعرف ${id} غير موجود.`);
        }

        // حذف الطالب من القائمة
        const deletedStudent = students.splice(index, 1)[0];
        console.log(`تم حذف ${deletedStudent.name} من قائمة الطلاب.`);
    } catch (error) {
        console.error(error.message);
    }
}

// دالة لطباعة قائمة الطلاب
function printStudents(students) {
    console.log("قائمة الطلاب:");
    students.forEach(student => {
        console.log(`المعرف: ${student.id}, الاسم: ${student.name}, الحالة: ${student.status}`);
    });
}

// تجربة استخدام الدوال
addStudent(students, 1, 'أحمد');
addStudent(students, 2, 'فاطمة');
addStudent(students, 1, 'محمد'); // سيتم رمي خطأ لأن معرف الطالب 1 موجود بالفعل
printStudents(students);

removeStudent(students, 2);
removeStudent(students, 3); // سيتم رمي خطأ لأن الطالب غير موجود
printStudents(students);
