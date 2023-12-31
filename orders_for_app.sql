PGDMP     (    (            
    {            orders_for_app    15.4    15.4 +    &           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            '           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            (           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            )           1262    24655    orders_for_app    DATABASE     �   CREATE DATABASE orders_for_app WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE orders_for_app;
                postgres    false            �            1259    24671    orders    TABLE     S   CREATE TABLE public.orders (
    order_id integer NOT NULL,
    user_id integer
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    24670    orders_order_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.orders_order_id_seq;
       public          postgres    false    219            *           0    0    orders_order_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders.order_id;
          public          postgres    false    218            �            1259    24690    orders_services    TABLE     �   CREATE TABLE public.orders_services (
    orders_services_id integer NOT NULL,
    orders_id integer,
    services_id integer
);
 #   DROP TABLE public.orders_services;
       public         heap    postgres    false            �            1259    24689 &   orders_services_orders_services_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_services_orders_services_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE public.orders_services_orders_services_id_seq;
       public          postgres    false    221            +           0    0 &   orders_services_orders_services_id_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public.orders_services_orders_services_id_seq OWNED BY public.orders_services.orders_services_id;
          public          postgres    false    220            �            1259    24664    service    TABLE     �   CREATE TABLE public.service (
    service_id integer NOT NULL,
    service_name character varying(50),
    service_cost money
);
    DROP TABLE public.service;
       public         heap    postgres    false            �            1259    24663    service_service_id_seq    SEQUENCE     �   CREATE SEQUENCE public.service_service_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.service_service_id_seq;
       public          postgres    false    217            ,           0    0    service_service_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.service_service_id_seq OWNED BY public.service.service_id;
          public          postgres    false    216            �            1259    24707    sessions    TABLE     �   CREATE TABLE public.sessions (
    sessions_id integer NOT NULL,
    user_id integer,
    exp_date timestamp without time zone
);
    DROP TABLE public.sessions;
       public         heap    postgres    false            �            1259    24706    sessions_sessions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sessions_sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.sessions_sessions_id_seq;
       public          postgres    false    223            -           0    0    sessions_sessions_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.sessions_sessions_id_seq OWNED BY public.sessions.sessions_id;
          public          postgres    false    222            �            1259    24657    users    TABLE     �   CREATE TABLE public.users (
    user_id integer NOT NULL,
    user_fullname character varying(50),
    user_login character varying(50),
    user_password character varying(50)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    24656    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    215            .           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    214            {           2604    24674    orders order_id    DEFAULT     r   ALTER TABLE ONLY public.orders ALTER COLUMN order_id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);
 >   ALTER TABLE public.orders ALTER COLUMN order_id DROP DEFAULT;
       public          postgres    false    218    219    219            |           2604    24693 "   orders_services orders_services_id    DEFAULT     �   ALTER TABLE ONLY public.orders_services ALTER COLUMN orders_services_id SET DEFAULT nextval('public.orders_services_orders_services_id_seq'::regclass);
 Q   ALTER TABLE public.orders_services ALTER COLUMN orders_services_id DROP DEFAULT;
       public          postgres    false    221    220    221            z           2604    24667    service service_id    DEFAULT     x   ALTER TABLE ONLY public.service ALTER COLUMN service_id SET DEFAULT nextval('public.service_service_id_seq'::regclass);
 A   ALTER TABLE public.service ALTER COLUMN service_id DROP DEFAULT;
       public          postgres    false    217    216    217            }           2604    24710    sessions sessions_id    DEFAULT     |   ALTER TABLE ONLY public.sessions ALTER COLUMN sessions_id SET DEFAULT nextval('public.sessions_sessions_id_seq'::regclass);
 C   ALTER TABLE public.sessions ALTER COLUMN sessions_id DROP DEFAULT;
       public          postgres    false    223    222    223            y           2604    24660    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    214    215    215                      0    24671    orders 
   TABLE DATA           3   COPY public.orders (order_id, user_id) FROM stdin;
    public          postgres    false    219   �0       !          0    24690    orders_services 
   TABLE DATA           U   COPY public.orders_services (orders_services_id, orders_id, services_id) FROM stdin;
    public          postgres    false    221   �0                 0    24664    service 
   TABLE DATA           I   COPY public.service (service_id, service_name, service_cost) FROM stdin;
    public          postgres    false    217   �0       #          0    24707    sessions 
   TABLE DATA           B   COPY public.sessions (sessions_id, user_id, exp_date) FROM stdin;
    public          postgres    false    223   1                 0    24657    users 
   TABLE DATA           R   COPY public.users (user_id, user_fullname, user_login, user_password) FROM stdin;
    public          postgres    false    215   71       /           0    0    orders_order_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.orders_order_id_seq', 1, false);
          public          postgres    false    218            0           0    0 &   orders_services_orders_services_id_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('public.orders_services_orders_services_id_seq', 1, false);
          public          postgres    false    220            1           0    0    service_service_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.service_service_id_seq', 1, false);
          public          postgres    false    216            2           0    0    sessions_sessions_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.sessions_sessions_id_seq', 1, false);
          public          postgres    false    222            3           0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 1, false);
          public          postgres    false    214            �           2606    24676    orders orders_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    219            �           2606    24695 $   orders_services orders_services_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.orders_services
    ADD CONSTRAINT orders_services_pkey PRIMARY KEY (orders_services_id);
 N   ALTER TABLE ONLY public.orders_services DROP CONSTRAINT orders_services_pkey;
       public            postgres    false    221            �           2606    24669    service service_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.service
    ADD CONSTRAINT service_pkey PRIMARY KEY (service_id);
 >   ALTER TABLE ONLY public.service DROP CONSTRAINT service_pkey;
       public            postgres    false    217            �           2606    24712    sessions sessions_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (sessions_id);
 @   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_pkey;
       public            postgres    false    223                       2606    24662    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215            �           2606    24696 .   orders_services orders_services_orders_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders_services
    ADD CONSTRAINT orders_services_orders_id_fkey FOREIGN KEY (orders_id) REFERENCES public.orders(order_id);
 X   ALTER TABLE ONLY public.orders_services DROP CONSTRAINT orders_services_orders_id_fkey;
       public          postgres    false    221    3203    219            �           2606    24701 0   orders_services orders_services_services_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders_services
    ADD CONSTRAINT orders_services_services_id_fkey FOREIGN KEY (services_id) REFERENCES public.service(service_id);
 Z   ALTER TABLE ONLY public.orders_services DROP CONSTRAINT orders_services_services_id_fkey;
       public          postgres    false    3201    217    221            �           2606    24677    orders orders_user_id_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 D   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_user_id_fkey;
       public          postgres    false    219    215    3199            �           2606    24713    sessions sessions_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 H   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_user_id_fkey;
       public          postgres    false    3199    223    215                  x������ � �      !      x������ � �            x������ � �      #      x������ � �            x������ � �     