import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.min';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
import 'jquery-ui-touch-punch/jquery.ui.touch-punch';

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('.add-to-cart-btn').click(function() {  // اظهار رسالة التنبيه للمنتج بأنه اضيف للعربة 
        alert('أضيف المنتج الى العربة ');
    });

    $('#copyright').text("جميع الحقوق محفوظة سنة" + new Date().getFullYear());

    $('.product-option input[type="radio"]').change(function() {
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
    });

    //عند تغيير كمية المنتج 
    $('[data-product-quantity]').change(function () {

        //اجلب الكمية الجديدة 
        var newQuantity= $(this).val();

        // ابحث عن السطر الذي يحتوي معلومات هذا المنتج 
        var parent = $(this).parents('[data-product-info]');

        // اجلب سعر القطعة الواحدة عن معلومات المنتج 
        var pricePerUnit = parent.attr('data-product-price');

        // السعر الاجمالي للمنتج هو سعر القطعة مضروبا بعددها 
        var totalPriceForProduct = newQuantity * pricePerUnit;

        // عين السعر الجديد ضمن خلية السعر الاجمالي للمنتج في هذا السطر 
        parent.find('.total-price-for-product').text(totalPriceForProduct + '$');

        // حدث السعر الاجمالي لكل المنتجات 
        calculateTotalPrice();
    });

    $('[data-remove-from-cart]').click(function() {
        $(this).parents('[data-product-info]').remove();
        // اعد حساب السعر الاجمالي بعد حذف احد المنتجات 
        calculateTotalPrice();
    });

    function calculateTotalPrice() {
        // انشئ متغيرا جديدا لحفظ السعر الاجمالي 
        var totalPriceForAllProducts = 0;

        // لكل سطر يمثل معلومات المنتج في الصفحة 
        $('[data-product-info]').each(function() {

            // اجلب سعر القطعة الواحدة من الخاصية الموافقة 
            var pricePerUnit = $(this).attr('data-product-price');

            // اجلب كمية المنتج من حقل اختيار الكمية 
            var quantity = $(this).find('[data-product-quantity]').val();

            var totalPriceForProduct = pricePerUnit * quantity;

            // اضف السعر الاجمالي لهذا المنتج الى السعر الاجمالي لكل المنتجات واحفظ القيكة في المتغير نفسه 
            totalPriceForAllProducts = totalPriceForAllProducts + totalPriceForProduct;
        });

        // حدث السعر الاجمالي لكل المنتجات في الصفحة 
        $('#total-price-for-all-products').text(totalPriceForAllProducts + '$');
    }

    var citiesByCountry = {
        sa: ['الرياض' , 'جدة'],
        eg: ['القاهرة' , 'الاسكندرية'],
        je: ['عمان' , 'الزرقاء'],
        sy: ['دمشق' , 'حلب' , 'حماء']

    };

    // عندما يتغير البلد 
    $('#form-checkout select[name="country"]').change(function() {
        // اجلب رمز البلد 
        var country = $(this).val();

        // اجلب مدن هذا البلد من المصفوفة 
        var cities = citiesByCountry[country];

        // فرغ قائمة المدن 
        $('#form-checkout select[name="city"]').empty();

        // اضافة خيار اختر مدينة 
        $('#form-checkout select[name="city"]').append(
            '<option disabled selected value="">اختر المدينة</option>'
        );

        // اضف المدن الى قائمة المدن 
        cities.forEach(function(city) {
            var newOption = $('<option></option');
            newOption.text(city);
            newOption.val(city);
            $('#form-checkout select[name="city"]').append(newOption);
        });
    });

    // عند تغيير طريقة الدفع 
    $('#form-checkout input[name="payment_method"]').change(function() {

        // اجلب القيمة المختارة حاليا 
        var paymentMethod = $(this).val();

        if (paymentMethod === 'on_delivery') {

            // اذا كانت عند الاستلام فعطل حقول بطاقة الائتمان
            $('#credit-card-info input').prop('disabled', true);

        } else {

            // والا افعلها 
            $('#credit-card-info input').prop('disabled', false);
        }

        // بدل معلومات بطاقة الائتمان بين الظهور والاخفاء
        $('#credit-card-info').toggle();
    });

    // مكون البحث حسب السعر 
    $("#price-range").slider({
        range: true,
        min: 50,
        max: 1000,
        step: 50,
        values: [ 250, 800 ],
        slide: function(event, ui) {
            $('#price-min').text(ui.values[0]);
            $('#price-max').text(ui.values[1]);
        }
        
    });
});