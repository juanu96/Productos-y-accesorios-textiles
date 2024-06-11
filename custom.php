<?php


// Registrar Custom Post Types
function postype_servicios() {
    // Post Type: TELAS
    $args_telas = array(
        'labels' => array(
            'name' => 'Telas',
            'singular_name' => 'Tela',
            'menu_name' => 'Telas',
            'name_admin_bar' => 'Tela',
            'add_new' => 'Añadir Nueva',
            'add_new_item' => 'Añadir Nueva Tela',
            'new_item' => 'Nueva Tela',
            'edit_item' => 'Editar Tela',
            'view_item' => 'Ver Tela',
            'all_items' => 'Todas las Telas',
            'search_items' => 'Buscar Telas',
            'not_found' => 'No se encontraron Telas',
            'not_found_in_trash' => 'No se encontraron Telas en la papelera'
        ),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => false, // No mostrar en el menú
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_graphql' => true,
        'graphql_single_name' => 'Tela',
        'graphql_plural_name' => 'Telas'
    );
    register_post_type('telas', $args_telas);

    // Post Type: POLIFIBRAS Y GUATA
    $args_polifibras_guata = array(
        'labels' => array(
            'name' => 'Polifibras y Guata',
            'singular_name' => 'Polifibra y Guata',
            'menu_name' => 'Polifibras y Guata',
            'name_admin_bar' => 'Polifibra y Guata',
            'add_new' => 'Añadir Nueva',
            'add_new_item' => 'Añadir Nueva Polifibra y Guata',
            'new_item' => 'Nueva Polifibra y Guata',
            'edit_item' => 'Editar Polifibra y Guata',
            'view_item' => 'Ver Polifibra y Guata',
            'all_items' => 'Todas las Polifibras y Guatas',
            'search_items' => 'Buscar Polifibras y Guatas',
            'not_found' => 'No se encontraron Polifibras y Guatas',
            'not_found_in_trash' => 'No se encontraron Polifibras y Guatas en la papelera'
        ),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => false, // No mostrar en el menú
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_graphql' => true,
        'graphql_single_name' => 'Polifibra',
        'graphql_plural_name' => 'Polifibras'
    );
    register_post_type('polifibras_guata', $args_polifibras_guata);

    // Post Type: ACCESORIOS
    $args_accesorios = array(
        'labels' => array(
            'name' => 'Accesorios',
            'singular_name' => 'Accesorio',
            'menu_name' => 'Accesorios',
            'name_admin_bar' => 'Accesorio',
            'add_new' => 'Añadir Nuevo',
            'add_new_item' => 'Añadir Nuevo Accesorio',
            'new_item' => 'Nuevo Accesorio',
            'edit_item' => 'Editar Accesorio',
            'view_item' => 'Ver Accesorio',
            'all_items' => 'Todos los Accesorios',
            'search_items' => 'Buscar Accesorios',
            'not_found' => 'No se encontraron Accesorios',
            'not_found_in_trash' => 'No se encontraron Accesorios en la papelera'
        ),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => false, // No mostrar en el menú
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_graphql' => true,
        'graphql_single_name' => 'Accesorio',
        'graphql_plural_name' => 'Accesorios'
    );
    register_post_type('accesorios', $args_accesorios);
}
add_action('init', 'postype_servicios');

// Registrar Taxonomía
function register_custom_taxonomy() {
    register_taxonomy('categoria-de-producto', array('telas', 'polifibras_guata', 'accesorios'), array(
        'labels' => array(
            'name' => 'Categorias de productos',
            'singular_name' => 'Categoria de producto',
            'menu_name' => 'Categorias de productos',
            'all_items' => 'All Categorias de productos',
            'edit_item' => 'Edit Categoria de producto',
            'view_item' => 'View Categoria de producto',
            'update_item' => 'Update Categoria de producto',
            'add_new_item' => 'Add New Categoria de producto',
            'new_item_name' => 'New Categoria de producto Name',
            'parent_item' => 'Parent Categoria de producto',
            'parent_item_colon' => 'Parent Categoria de producto:',
            'search_items' => 'Search Categorias de productos',
            'not_found' => 'No categorias de productos found',
            'no_terms' => 'No categorias de productos',
            'filter_by_item' => 'Filter by categoria de producto',
            'items_list_navigation' => 'Categorias de productos list navigation',
            'items_list' => 'Categorias de productos list',
            'back_to_items' => '← Go to categorias de productos',
            'item_link' => 'Categoria de producto Link',
            'item_link_description' => 'A link to a categoria de producto',
        ),
        'public' => true,
        'hierarchical' => true,
        'show_in_menu' => false, // No mostrar en el menú
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'categoriaDeProducto',
        'graphql_plural_name' => 'categoriasDeProductos',
    ));
}
add_action('init', 'register_custom_taxonomy');

// Crear el menú personalizado
function custom_product_menu() {
    add_menu_page(
        'Productos', // Título de la página
        'Productos', // Título del menú
        'manage_options', // Capacidad
        'custom-product-menu', // Slug del menú
        '', // Función callback (vacía, ya que no necesitamos una página propia)
        'dashicons-products', // Icono del menú
        20 // Posición
    );

    // Añadir submenús para cada tipo de post
    add_submenu_page(
        'custom-product-menu',
        'Todas las Telas',
        'Telas',
        'manage_options',
        'edit.php?post_type=telas'
    );

    add_submenu_page(
        'custom-product-menu',
        'Todas las Polifibras y Guatas',
        'Polifibras y Guata',
        'manage_options',
        'edit.php?post_type=polifibras_guata'
    );

    add_submenu_page(
        'custom-product-menu',
        'Todos los Accesorios',
        'Accesorios',
        'manage_options',
        'edit.php?post_type=accesorios'
    );

    // Añadir submenú para la taxonomía
    add_submenu_page(
        'custom-product-menu',
        'Categorias de Productos',
        'Categorias',
        'manage_options',
        'edit-tags.php?taxonomy=categoria-de-producto&post_type=telas'
    );

    // Eliminar el primer submenú añadido automáticamente
    remove_submenu_page('custom-product-menu', 'custom-product-menu');
}
add_action('admin_menu', 'custom_product_menu');

// Deshabilitar el editor WYSIWYG para los tipos de post personalizados
function disable_wysiwyg_editor() {
    // Deshabilitar el editor para el tipo de post 'telas'
    remove_post_type_support('telas', 'editor');

    // Deshabilitar el editor para el tipo de post 'polifibras_guata'
    remove_post_type_support('polifibras_guata', 'editor');

    // Deshabilitar el editor para el tipo de post 'accesorios'
    remove_post_type_support('accesorios', 'editor');
}
add_action('admin_init', 'disable_wysiwyg_editor');

// Añadir columnas personalizadas a la lista de post
function add_custom_columns($columns) {
    $columns['categoria_de_producto'] = 'Categoria de Producto';
    return $columns;
}
add_filter('manage_telas_posts_columns', 'add_custom_columns');
add_filter('manage_polifibras_guata_posts_columns', 'add_custom_columns');
add_filter('manage_accesorios_posts_columns', 'add_custom_columns');

function custom_columns_content($column, $post_id) {
    if ($column == 'categoria_de_producto') {
        $terms = get_the_terms($post_id, 'categoria-de-producto');
        if ($terms && !is_wp_error($terms)) {
            $term_links = array();
            foreach ($terms as $term) {
                $term_links[] = $term->name;
            }
            echo implode(', ', $term_links);
        } else {
            echo 'No Categories';
        }
    }
}
add_action('manage_telas_posts_custom_column', 'custom_columns_content', 10, 2);
add_action('manage_polifibras_guata_posts_custom_column', 'custom_columns_content', 10, 2);
add_action('manage_accesorios_posts_custom_column', 'custom_columns_content', 10, 2);

// Hacer las columnas personalizadas ordenables
function custom_columns_sortable($columns) {
    $columns['categoria_de_producto'] = 'categoria-de-producto';
    return $columns;
}
add_filter('manage_edit-telas_sortable_columns', 'custom_columns_sortable');
add_filter('manage_edit-polifibras_guata_sortable_columns', 'custom_columns_sortable');
add_filter('manage_edit-accesorios_sortable_columns', 'custom_columns_sortable');
