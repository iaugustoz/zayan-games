const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', function() {
    Swal.fire({
        'icon': 'success',
        'title': 'Tudo certo por aqui!',
        'text': 'Você entrou para o grupo de assinantes!',    
        'iconColor': '#109010',
        'confirmButtonColor': '#000',
    });
});