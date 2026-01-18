export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col items-center py-8 px-2 rtl">
      <div className="w-full max-w-2xl bg-[var(--card)] rounded-2xl shadow-lg p-6 sm:p-10 border border-[var(--border)]">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-[var(--primary)]">الشروط والأحكام</h1>
        <p className="text-center text-[var(--muted-foreground)] mb-8">آخر تحديث: يناير 2026</p>

        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">1. قبول الشروط</h2>
            <p className="text-[var(--foreground)]">عند إنشاء حساب واستخدام التطبيق، فأنت تقر بأنك قرأت وفهمت ووافقت على هذه الشروط وسياسة الخصوصية. إذا لم توافق، يرجى عدم استخدام التطبيق.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">2. وصف الخدمة</h2>
            <ul className="list-disc pr-6 text-[var(--foreground)] space-y-1">
              <li>حجز وإدارة المواعيد ومتابعة حالتها.</li>
              <li>محادثة مرتبطة بالموعد (نص/صور).</li>
              <li>ميزات حساب مثل تعديل المعلومات وتغيير كلمة المرور وحذف الحساب.</li>
              <li>فتح موقع العيادة على الخرائط عند توفره.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">3. حساب المستخدم</h2>
            <h3 className="font-semibold">إنشاء الحساب</h3>
            <p className="text-[var(--foreground)]">يجب تقديم معلومات صحيحة عند التسجيل. أنت مسؤول عن الحفاظ على سرية بيانات الدخول وعن أي نشاط يتم عبر حسابك.</p>
            <h3 className="font-semibold mt-2">مسؤولياتك</h3>
            <ul className="list-disc pr-6 text-[var(--foreground)] space-y-1">
              <li>يجب أن يكون عمرك 18 سنة أو أكثر لإنشاء حساب.</li>
              <li>لا تشارك كلمة المرور مع الآخرين.</li>
              <li>أبلغنا عند الاشتباه بوصول غير مصرح به.</li>
              <li>أنت مسؤول عن المحتوى الذي ترسله (مثل رسائل وصور المحادثة).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">4. الاستخدام المقبول</h2>
            <ul className="list-disc pr-6 text-[var(--foreground)] space-y-1">
              <li>عدم مخالفة القوانين أو إساءة استخدام الخدمة.</li>
              <li>عدم رفع برمجيات خبيثة أو محاولة اختراق أو تعطيل الخدمة.</li>
              <li>عدم محاولة الوصول غير المصرح به للأنظمة.</li>
              <li>عدم استخدام التطبيق لأغراض غير قانونية.</li>
              <li>عدم الهندسة العكسية أو استخراج الشفرة أو العبث بالتطبيق.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">5. المحتوى والبيانات</h2>
            <p className="text-[var(--foreground)]">تحتفظ بحقوقك على المحتوى الذي ترسله. ولكنك تمنحنا ترخيصاً محدوداً لمعالجة وتخزين البيانات فقط لتقديم الخدمة (مثل إظهار المحادثة للطرف الآخر ضمن الموعد).</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">6. توفر الخدمة</h2>
            <p className="text-[var(--foreground)]">قد تتغير أو تتوقف بعض الميزات مؤقتاً لأسباب تقنية أو أمنية أو بسبب التحديثات. لا نضمن توفر الخدمة دون انقطاع.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">7. الملكية الفكرية</h2>
            <p className="text-[var(--foreground)]">التطبيق وواجهاته واسم المنتج وشعاراته هي ملك للجهة المالكة. لا يجوز نسخ أو تعديل أو إعادة توزيع أو هندسة عكسية لأي جزء من التطبيق.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">8. إنهاء الحساب</h2>
            <h3 className="font-semibold">بواسطتك</h3>
            <p className="text-[var(--foreground)]">يمكنك طلب حذف حسابك من داخل التطبيق عبر شاشة حذف الحساب.</p>
            <h3 className="font-semibold mt-2">بواسطتنا</h3>
            <p className="text-[var(--foreground)]">قد نعلّق أو ننهي الحساب عند إساءة الاستخدام أو مخالفة الشروط أو لأسباب أمنية.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">9. إخلاء المسؤولية وحدودها</h2>
            <p className="text-[var(--foreground)]">يتم تقديم الخدمة كما هي دون أي ضمانات. قد تحتوي الخدمة على أخطاء أو انقطاعات. إلى أقصى حد يسمح به القانون، لا نتحمل مسؤولية الأضرار غير المباشرة الناتجة عن استخدامك للخدمة.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">10. التعويض</h2>
            <p className="text-[var(--foreground)]">توافق على تعويض الجهة المالكة عن المطالبات والأضرار الناتجة عن إساءة الاستخدام أو مخالفة الشروط أو انتهاك حقوق الآخرين.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">11. القانون الواجب التطبيق</h2>
            <p className="text-[var(--foreground)]">تخضع هذه الشروط للقوانين والأنظمة المعمول بها. يتم حل النزاعات عبر الجهات القضائية المختصة.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">12. تغييرات الشروط</h2>
            <p className="text-[var(--foreground)]">قد نقوم بتعديل هذه الشروط. استمرارك باستخدام التطبيق بعد أي تعديل يعني موافقتك على النسخة المحدثة.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-[var(--primary)]">13. معلومات التواصل</h2>
            <p className="text-[var(--foreground)]">للاستفسار حول الشروط: medicare410@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
