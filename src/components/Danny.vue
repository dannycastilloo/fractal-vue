<script setup>

</script>

<template>
    <div>
        <div class='profile-container'>
            <div class='profile-info'>
                <h1 class='name'>Danny <span>Castillo</span></h1>
                <h2 class='career'>Frontend Developer and UI/UX Designer</h2>
                <div class='profile-actions'>
                    <div class='icons-social'>
                        <a href="https://www.linkedin.com/in/dannycastilloo/">
                            <button class='button-contact'>
                                <img src='/contact/Linkedin.svg' alt='Linkedin' />
                            </button>
                        </a>
                        <a href="https://github.com/dannycastilloo">
                            <button class='button-contact'>
                                <img src='/contact/Github.svg' alt='Github' />
                            </button>
                        </a>
                        <a href="mailto:dannycastillootiniano@gmail.com">
                            <button class='button-contact'>
                                <img src='/contact/Email.svg' alt='Email' />
                            </button>
                        </a>
                        <a href="https://wa.link/zvm7kf">
                            <button class='button-contact'>
                                <img src='/contact/WhatsApp.svg' alt='WhatsApp' />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div class='my-photo'>
                <img class='photo' src='/extra/danny.png' alt="Danny Castillo" />
            </div>
        </div>
        <h3 class='mensaje'>Espero que tu experiencia en este sitio haya sido agradable 🙌</h3>
    </div>
</template>

<style>
.profile-container {
    display: flex;
    padding: 50px 100px;
    align-items: center;
    width: 800px;
    margin: 50px auto;
    background-color: #1E1E1E;
    border-radius: 50px;
}

.profile-info {
    margin-right: auto;
    text-align: center;
}

.name {
    font-size: 48px;
    margin-top: 10px;
    margin-bottom: 20px;
    color: rgb(235, 235, 235);
}

.name > span {
    color: #2979FF;
}

.career {
    font-size: 20px;
    color: #9BA7B1;
    margin-bottom: 40px;
}

.profile-actions {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.profile-actions * {
    display: block;
    margin: auto 0;
}

.icons-social {
    display: flex;
    flex-direction: row;
    gap: 25px;
    margin: 0 auto;
}

.button-contact {
    border: none;
    cursor: pointer;
    background-color: #1E1E1E;
}

.button-contact > img {
    width: 30px;
}

.photo {
    display: block;
    width: 16rem;
}

.mensaje {
    text-align: center;
    width: 60%;
    margin: 50px auto;
    font-size: 32px;
}

@media (width < 768px) {
    .profile-container {
        flex-direction: column;
        padding: 30px;
        gap: 50px;
        width: 250px;
        margin: 100px auto 0 auto;
    }

    .profile-info {
        margin: 0 auto;
    }

    .name {
        font-size: 2.5rem;
        margin-bottom: 25px;
    }

    .career {
        font-size: 1rem;
        margin-bottom: 30px;
    }

    .profile-actions {
        gap: 10px;
    }

    .icons-social {
        display: flex;
        flex-direction: row;
    }

    .my-photo {
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        width: 200px;
    }

    .photo {
        width: 80%;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }

    .mensaje {
        width: 75%;
        margin: 40px auto;
        font-size: 24px;
    }
}

@media (768px <= width < 1440px) {
        .profile-container {
        flex-direction: column;
        padding: 30px;
        gap: 50px;
        width: 250px;
        margin: 100px auto;
    }

    .profile-info {
        margin: 0 auto;
    }

    .name {
        font-size: 2.5rem;
        margin-bottom: 25px;
    }

    .career {
        font-size: 1rem;
        margin-bottom: 30px;
    }

    .profile-actions {
        gap: 10px;
    }
    
    .icons-social {
        display: flex;
        flex-direction: row;
    }

    .my-photo {
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        width: 200px;
    }

    .photo {
        width: 80%;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }

    .mensaje {
        text-align: center;
        width: 50%;
        margin: 20px auto;
        font-size: 24px;
    }
}
</style>